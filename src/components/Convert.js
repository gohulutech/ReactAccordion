import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [debouncedText, setDebouncedText] = useState(text);
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translateText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: API_KEY,
          },
        }
      );

      setTranslatedText(data.data.translations[0].translatedText);
    };

    translateText();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translatedText}</h1>
    </div>
  );
};

export default Convert;
