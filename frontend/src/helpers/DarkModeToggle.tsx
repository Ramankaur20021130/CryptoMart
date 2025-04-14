import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const DarkModeToggle = () => {
	const [isDarkMode, setDarkMode] = useState(false);

	const toggleDarkMode = (checked: boolean) => {
		setDarkMode(checked);
		isDarkMode
			? (document.documentElement.classList.remove("dark") & document.getElementById("myDIV").classList.add("bg-gradient-to-r"))
			: (document.documentElement.classList.add("dark") & document.getElementById("myDIV").classList.remove("bg-gradient-to-r"));
	};

	return (
		<DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={35} />
	);
};
