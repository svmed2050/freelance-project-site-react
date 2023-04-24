const btnDarkMode = document.querySelector('.dark-mode-btn')
// prettier-ignore
const scheme = "(prefers-color-scheme: dark)"

// 1. Сheck dark mode in system settings
if (window.matchMedia && window.matchMedia(scheme).matches) {
	changeTheme('dark')
}

/* 2. Check dark mode in local storage */
let localSt = localStorage.getItem('darkMode')
changeTheme(localSt)

// If system seetings changed dark/light mode
window.matchMedia(scheme).addEventListener('change', (event) => {
	const newColorScheme = event.matches ? 'dark' : 'light'
	localStorage.setItem('darkMode', newColorScheme)
	changeTheme(newColorScheme)
})

// night mode activation (enable)
btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle('dark-mode-btn--active')
	const isDark = document.body.classList.toggle('dark')

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'light')
	}
}

function changeTheme(mode) {
	/* 
	mode === 'remove'
	mode === 'light'
	*/
	if (mode === 'dark') {
		btnDarkMode.classList.add('dark-mode-btn--active')
		document.body.classList.add('dark')
	}

	if (mode === 'light') {
		btnDarkMode.classList.remove('dark-mode-btn--active')
		document.body.classList.remove('dark')
	}
}
