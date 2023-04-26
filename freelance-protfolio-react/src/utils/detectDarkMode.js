export const detectDarkMode = () => {
	const scheme = '(prefers-color-scheme: dark)'

	// 1. Сheck dark mode in system settings
	if (window.matchMedia && window.matchMedia(scheme).matches) {
		return 'dark'
	}
	return 'light'
}
