//Global Variables that store the DOM elements used
const itemsPerPage = 10;
const studentList = document.querySelector('.student-list').children;
const pageDiv = document.querySelector('.page');




//function to hide all list items except the current 10
const showPage = (list, page) => {
  let lastIndex = (itemsPerPage * page) - 1;
  let firstIndex = lastIndex - (itemsPerPage - 1);
  for (let i = 0; i < list.length; i += 1) {
    if (i >= firstIndex && i <= lastIndex) {
      list[i].style.display = '';
      } else {
        list[i].style.display = 'none';
      }
    }
  }
showPage(studentList, 1);



//function to generate, append, and add functionality to the pagination buttons
const appendPageLinks = (list) => {
  //this will create the appropritate number of pages for the list
  const totalPages = Math.ceil(list.length / itemsPerPage);

  //this createa 'div' with pagination class and append to '.page' div
  const theDiv = document.createElement('div');
  theDiv.classList.add('pagination');
  pageDiv.appendChild(theDiv);

  //this add 'ul' to the div to store the pagination links
  const ul = document.createElement('ul');
  theDiv.appendChild(ul);

  //this add 'li' and 'a' tags for evert page number
  const li = document.createElement('li');
  const a = document.createElement('a');

  for (let i = 1; i <= totalPages; i += 1) {
    ul.appendChild(li);
    let a = document.createElement('a');
    a.href = '#';
    a.innerText = i;
    li.appendChild(a);
    if (i === 1) {
      a.className = 'active';
    }
  
    ////event listener for  each 'a' tag to call the showPage function & display the appropriate page
    a.addEventListener('click', (event) => {
      let currentPageNumber = event.target.textContent;
      showPage(studentList, currentPageNumber);
      const links = document.querySelectorAll('a');

      //this loops over pagination links to remove active class from all links
      const paginationLinks = document.querySelectorAll('.pagination ul li a');
      for (let i = 0; i < paginationLinks.length; i += 1) {
        paginationLinks[i].classList.remove('active');
      }

      //this adds the active class to the link that was just clicked
      event.target.className = 'active';
    });
  }
}
appendPageLinks(studentList);
