import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState, useEffect } from "react";
import { i18n } from "../../Translate/i18n";

export default function SwitchLanguage() {
  const storedLanguage = localStorage.getItem("i18nextLng");
  const initialLanguage = storedLanguage || "en-US";

  const [state, setState] = useState({
    checked: initialLanguage === "en-US", 
  });

  useEffect(() => {
    const languageValue = state.checked ? "en-US" : "pt-BR";
    i18n.changeLanguage(languageValue);
    localStorage.setItem("i18nextLng", languageValue);
  }, [state.checked]);

  const handleChange = () => {
    setState((state) => ({
      ...state,
      checked: !state.checked,
    }));

    const languageValue = !state.checked ? "en-US" : "pt-BR";
    localStorage.setItem("i18nextLng", languageValue);
    window.location.reload()
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.checked}
          onChange={handleChange}
          name="checked"
          style={{
            color: state.checked ? "#22b534" : "#126dff",
          }}
        />
      }
      label="EN"
      style={{
        color: "#ffffff",
      }}
    />
  );
}
