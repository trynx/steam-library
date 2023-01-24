import { Input } from "antd";
import { useState } from "react";
const { Search } = Input;

export const SearchRecipes = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [timeOutId, setTimeOutId] = useState();

  const searchTypeHandler = (e) => {
    searchHandler(e.target.value);
  };

  const searchHandler = (value) => {
    if (!value || value === searchValue) {
      return;
    }

    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    // Debounce the search
    const timeOut = setTimeout(() => {
      setSearchValue(value);
      onSearch(value);
    }, 300);

    setTimeOutId(timeOut);
  };

  return (
    <>
      <Search
        placeholder="Search a recipe 📃"
        allowClear
        onSearch={searchHandler}
        style={{
          width: 400,
        }}
        onChange={searchTypeHandler}
      />
    </>
  );
};
