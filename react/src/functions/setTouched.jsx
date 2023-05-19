export const setTouchedTrueRegister = (
	setEmailTouched,
	setUsernameTouched,
	setPasswordTouched,
	setPasswordValidatedTouched
) => {
	setEmailTouched(true)
	setUsernameTouched(true)
	setPasswordTouched(true)
	setPasswordValidatedTouched(true)
}

export const setTouchedFalseRegister = (
	setEmailTouched,
	setUsernameTouched,
	setPasswordTouched,
	setPasswordValidatedTouched
) => {
	setEmailTouched(false)
	setUsernameTouched(false)
	setPasswordTouched(false)
	setPasswordValidatedTouched(false)
}

export const setTouchedTrueLogin = (setLoginTouched, setPasswordTouched) => {
	setLoginTouched(true)
	setPasswordTouched(true)
}

export const setTouchedFalseLogin = (setLoginTouched, setPasswordTouched) => {
	setLoginTouched(false)
	setPasswordTouched(false)
}
