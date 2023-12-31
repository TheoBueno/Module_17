class Book extends HTMLElement{
  constructor(){
    super();

    const title       = this.getAttribute('title');
    const subtitle    = this.getAttribute('subtitle');
    const author      = this.getAttribute('author');
    const publisher   = this.getAttribute('publisher');
    const description = this.getAttribute('description');
    const link        = this.getAttribute('link');


    this.innerHTML = `
    <div class="card">
    <h5 class="card-header">${title}</h5>
    <div class="card-body">
    <h5 class="card-title">${subtitle}</h5>
        <p class="card-text">
        <table class="table">
          <tr>
            <td class="text-success font-weight-bold">Title:</td>
            <td>${title}</td>
          </tr>
          <tr>
            <td class="text-success font-weight-bold">Subtitle:</td>
            <td>${subtitle}</td>
          </tr>
          <tr>
            <td class="text-success font-weight-bold">Author:</td>
            <td>${author}</td>
          </tr>
          <tr>
            <td class="text-success font-weight-bold">Publisher:</td>
            <td>${publisher}</td>
          </tr>
          <tr>
            <td class="text-success font-weight-bold">Description:</td>
            <td>${description}</td>
          </tr>
        </table>
        </p>
      <a href="${link}" class="btn btn-primary">e-Book</a>
    </div>
  </div>
</div>
    `

  }
}

customElements.define('mit-book', Book)