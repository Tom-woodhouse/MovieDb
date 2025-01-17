import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
}

const SearchForm = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
}: SearchFormProps) => {
  return (
    <form
      className="search-form py-8 flex align-middle"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <TextField
        id="filled-basic"
        label="Search for a movie"
        variant="filled"
        className="bg-slate-50"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        type="submit"
        className="mx-2 bg-slate-50 text-slate-400"
        variant="contained"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
