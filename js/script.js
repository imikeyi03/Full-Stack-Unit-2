/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// Global variables [student list and how many items per page]
let student_list = document.querySelectorAll('li.student-item');
const studentsPerPage = 10;


//Show page function to display 10 students per page and hide the remainder
function showPage(list,page) {
   const initalIndex = (page * studentsPerPage) - studentsPerPage;
   const lastIndex = (page * studentsPerPage) - 1 ;
   
   for(let i = 0; i < list.length; i++) {
      if(i >= initalIndex && i <= lastIndex) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
};

//Append ordered bottom page links to paginate 10 students at a time 
function appendPageLinks(list) {

   // Determine how many pages are needed for the list 
   const pageCount = student_list.length / 10;
   console.log(pageCount);

   //Create a div, give it the "pagination" class, and append it to the .page div
   let div = document.createElement('div')
   
   div.className = 'pagination';
   console.log(div);
   
   pageDiv = document.querySelector('div.page')
   pageDiv.appendChild(div);
   console.log(pageDiv);
   
   //Add a ul to the "pagination" div to store the pagination links
   ul = document.createElement('ul');
   div.appendChild(ul);


   // Create the neccessary amount of links for the amount of students
   for (let i = 0; i < (list.length / studentsPerPage); i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');

      a.href = '#';
      a.textContent = i + 1;
      ul.appendChild(li);
      li.appendChild(a);

      if(a.textContent == 1) {
         a.className = 'active';
      }

   //Pass links to event listener   
   watchPageClicks(a)
   }
   
   
   
   function watchPageClicks(a) {
   //Listen for clicks on pagintation links and add active class to selected page
    a.addEventListener('click', (event) => {                  
      const linkClicked = event.target;
      const pageNumber = a.textContent;
      const pageLinks = document.getElementsByTagName('a');

      //Iterate through links and remove active class
      for (let count = 0; count < pageLinks.length; count++) {
        pageLinks[count].classList.remove('active');
      }
      
      //Add class active to the current PageNumber
      linkClicked.classList.add('active');

      //Call showpage function to display students
      showPage(student_list, pageNumber);                                            
      });
   }
}

showPage(student_list, 1);
appendPageLinks(student_list)