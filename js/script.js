/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/


// Global variables [student list and how many items per page]
let student_list = document.querySelectorAll('li.student-item');
const studentsPerPage = 10;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

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





/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

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

   for (let i = 0; i < (list.length / studentsPerPage); i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');

      a.href = '#';
      a.textContent = i + 1;
      ul.appendChild(li);
      li.appendChild(a);
   }
   console.log(ul);
}


showPage(student_list, 1);
appendPageLinks(student_list)