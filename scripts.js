$(document).ready(function () {
    // Initialize filters and display movies
    initFilters();
    loadMovies();

    function initFilters() {
        // Extract sagas, phases, and years dynamically from movies data
        const sagas = [...new Set(moviesData.map(movie => movie.saga))];
        const phases = [...new Set(moviesData.map(movie => movie.phase))];
        const years = [...new Set(moviesData.map(movie => new Date(movie.release_date).getFullYear()))];
        
        sagas.sort();
        phases.sort((a, b) => a - b);
        years.sort((a, b) => a - b);

        // Populate saga filter
        sagas.forEach(saga => {
            $('#saga-filter').append(`<option value="${saga}">${saga}</option>`);
        });

        // Populate phase filter
        phases.forEach(phase => {
            $('#phase-filter').append(`<option value="${phase}">Phase ${phase}</option>`);
        });

        // Populate year filter
        years.forEach(year => {
            $('#year-filter').append(`<option value="${year}">${year}</option>`);
        });

        // Event listeners for filters
        $('#saga-filter, #year-filter, #phase-filter, input[name="viewStatus"], input[name="sortOrder"]').on('change', function () {
            loadMovies();
            updateFilterInfo();
        });

        // Event listener for reset button
        $('#reset-filters').on('click', function () {
            $('#saga-filter').val('');
            $('#year-filter').val('');
            $('#phase-filter').val('');
            $('input[name="viewStatus"]').prop('checked', false);
            $('#view-all').prop('checked', true); // Reset view status to all
            $('input[name="sortOrder"]').prop('checked', false);
            $('#sort-chronology-asc').prop('checked', true); // Reset sort order to chronology ascending
            loadMovies();
            updateFilterInfo();
        });

        updateFilterInfo(); // Initial call to set button colors correctly
    }

    function loadMovies() {
        const selectedSaga = $('#saga-filter').val();
        const selectedYear = $('#year-filter').val();
        const selectedPhase = $('#phase-filter').val();
        const selectedViewStatus = $('input[name="viewStatus"]:checked').val();
        const selectedSortOrder = $('input[name="sortOrder"]:checked').val();

        let filteredMovies = moviesData.filter(movie => {
            const movieYear = new Date(movie.release_date).getFullYear();
            const seenDate = localStorage.getItem(`seen-${movie.id}`);
            const isSeen = seenDate !== null;

            return (selectedSaga === "" || movie.saga === selectedSaga) &&
                   (selectedYear === "" || movieYear.toString() === selectedYear) &&
                   (selectedPhase === "" || movie.phase.toString() === selectedPhase) &&
                   (selectedViewStatus === "" ||
                    (selectedViewStatus === "seen" && isSeen) ||
                    (selectedViewStatus === "unseen" && !isSeen));
        });

        // Sorting based on the selected sort order
        filteredMovies.sort((a, b) => {
            const aChronology = parseInt(a.chronology, 10);
            const bChronology = parseInt(b.chronology, 10);
            const aDate = new Date(a.release_date);
            const bDate = new Date(b.release_date);

            switch (selectedSortOrder) {
                case 'chronology-asc':
                    return aChronology - bChronology;
                case 'chronology-desc':
                    return bChronology - aChronology;
                case 'date-asc':
                    return aDate - bDate;
                case 'date-desc':
                    return bDate - aDate;
                default:
                    return 0;
            }
        });

        const moviesContainer = $("#movies-container");
        moviesContainer.empty();

        filteredMovies.forEach(movie => {
            const releaseDateFormatted = moment(movie.release_date).format('DD/MM/YYYY');
            const durationFormatted = `${Math.floor(movie.duration / 60)}h ${movie.duration % 60}m`;
            const isSeen = localStorage.getItem(`seen-${movie.id}`) !== null;
            const seenButtonClass = isSeen ? 'btn-secondary' : 'btn-primary'; // Set button class based on seen state
            const seenButtonText = isSeen ? 'Seen' : 'Mark as Seen'; // Set button text based on seen state
            const seenButtonDisplay = isSeen ? 'none' : 'inline-block'; // Hide button if already seen
            const seenDateDisplay = isSeen ? 'block' : 'none'; // Show date only if already seen
            const movieCard = `
                <div class="col-md-4 mb-4"> <!-- Adds margin-bottom for spacing -->
                    <div class="card" onclick="toggleSeen(${movie.id})">
                        <img src="${movie.cover_url}" class="card-img-top" alt="${movie.title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">Release Date: ${releaseDateFormatted}</p>
                            <p class="card-text">Duration: ${durationFormatted}</p>
                            <p class="card-text">Saga: ${movie.saga}</p>
                            <p class="card-text">Phase: ${movie.phase}</p>
                            <button class="btn btn-trailer" onclick="window.open('${movie.trailer_url}', '_blank'); event.stopPropagation();">Watch Trailer</button>
                            <button class="btn ${seenButtonClass} btn-seen" style="display: ${seenButtonDisplay}" onclick="event.stopPropagation(); toggleSeen(${movie.id})">${seenButtonText}</button>
                            <small id="date-seen-${movie.id}" class="form-text text-muted" style="display: ${seenDateDisplay}">Seen on: ${localStorage.getItem(`seen-${movie.id}`)}</small>
                        </div>
                    </div>
                </div>
            `;
            moviesContainer.append(movieCard);
        });
    }

    window.toggleSeen = function(movieId) {
        const seenDate = localStorage.getItem(`seen-${movieId}`);
        if (seenDate) {
            localStorage.removeItem(`seen-${movieId}`);
        } else {
            const newSeenDate = moment().format('DD/MM/YYYY HH:mm:ss');
            localStorage.setItem(`seen-${movieId}`, newSeenDate);
        }
        loadMovies(); // Reload movies to update button state
    };

    function updateFilterInfo() {
        const saga = $('#saga-filter').val();
        const year = $('#year-filter').val();
        const phase = $('#phase-filter').val();
        const status = $('input[name="viewStatus"]:checked').val();
        const filtersActive = saga || year || phase || status;

        $('#reset-filters').toggleClass('btn-danger', filtersActive).toggleClass('btn-secondary', !filtersActive);
    }
});
