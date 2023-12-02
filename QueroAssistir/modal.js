const background = document.getElementById('modal-background');
const modalContainer = document.getElementById('modal-container');

let currentMovie = {};

function backgroundClickHandler() {
  overlay.classList.remove('open');
}

function addCurrentMovieToList() {
  if (isMovieAlreadyOnList(currentMovie.imdbID)) {
    notie.alert({ type: 'error', text: 'Fime Já está na sua lista!' });
    return;
  }
  addToList(currentMovie);
  updateUI(currentMovie);
  updateLocalStorage();
  closeModal();
}

function createModal(data) {
  currentMovie = data;
  modalContainer.innerHTML = `
  <h2 id="movie-title">${data.Title} - ${data.Year}</h2>
                <section id="modal-body">
                <img id="movie-poster" src="${data.Poster}" 
                    alt="Poster do Filme">
                        <div id="movie-info">
                            <h5 id="movie-plot"> 
                                ${data.Plot}
                            </h5>
                            <div id="movie-cast">
                               <h4>
                                Elenco:
                               </h4> 
                               <h5>
                                ${data.Actors}
                               </h5>
                            </div>
                            <div id="movie-genre"> 
                                <h4>Gênero:</h4>
                                <h5>${data.Genre} </h>
                                </div>
                        </div> 
                </section>
                <section id="modal-footer">
                    <button id="add-to-list" onclick='{addCurrentMovieToList()}'> 'Adicionar a Lista</button>
                </section>`;
}
background.addEventListener('click', backgroundClickHandler);
