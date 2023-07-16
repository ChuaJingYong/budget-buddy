// When user clicks on the add button, make the modal box from display:none to display:block
const addCategoryBtn = document.querySelector('#add-category-btn')
const addCategoryModal = document.querySelector('#add-category-modal')

addCategoryBtn.addEventListener('click', () => {
  addCategoryModal.style.display = "block"
})

// If press create, then clear form and turn display back to none
const createBtn = document.querySelector('#create-btn')
createBtn.addEventListener('click', (event) => {
  event.preventDefault()

  // Get the new category input and add it into our user's categories from localStorage (when press on create )
  const categoryName = document.querySelector('#category-name')
  console.log('category is', categoryName.value)

  // Get the "currentUser" from localStorage
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  // --> update the currentUser expense categories (add a new category to existing array)
  currentUser.categories.expenses.push(categoryName.value)

  console.log(currentUser)
  // pass it back into the localStorage
  localStorage.setItem('currentUser', JSON.stringify(currentUser))

  addCategoryModal.style.display = "none"

  addCategoryModal.reset()
})

// If press cancel, then clear form and turn display back to none
const deleteBtn = document.querySelector('#delete-btn')
deleteBtn.addEventListener('click', (event) => {
  event.preventDefault()

  addCategoryModal.style.display = "none"

  addCategoryModal.reset()
})




// 🧠 Create the eventlistner logic for cancel button so that when user clicks on it, the input value is cleared and the modal disappers


