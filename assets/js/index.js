document.addEventListener('DOMContentLoaded', () => {
	const phoneInput = document.querySelector('.request__phone-input')
	const dropdownBtn = document.querySelector('.request__dropdown-btn')
	const dropdownList = document.querySelector('.request__dropdown-list')

	dropdownBtn.addEventListener('click', e => {
		e.stopPropagation()
		dropdownList.classList.toggle('active')
	})

	document.addEventListener('click', () => {
		dropdownList.classList.remove('active')
	})

	dropdownList.addEventListener('click', e => {
		const item = e.target.closest('.request__dropdown-item')
		if (item) {
			const countryCode = item.dataset.countryCode
			const dialCode = item.dataset.dialCode
			const flagImg = item.querySelector('img').src

			dropdownBtn.innerHTML = `
        <img src="${flagImg}" alt="${countryCode}">
        <span>${dialCode}</span>
      `

			phoneInput.value = dialCode + ' '
			phoneInput.focus()
			dropdownList.classList.remove('active')
		}
	})
})

document.addEventListener('DOMContentLoaded', () => {
	const select = document.querySelector('.request__select')
	const selectHeader = select.querySelector('.request__select-header')
	const selectCurrent = select.querySelector('.request__select-current')
	const selectItems = select.querySelectorAll('.request__select-item')

	selectHeader.addEventListener('click', () => {
		select.classList.toggle('active')
	})

	selectItems.forEach(item => {
		item.addEventListener('click', () => {
			const value = item.textContent
			selectCurrent.textContent = value
			select.classList.remove('active')
			selectCurrent.style.color = '#000'
		})
	})

	document.addEventListener('click', e => {
		if (!select.contains(e.target)) {
			select.classList.remove('active')
		}
	})
})
