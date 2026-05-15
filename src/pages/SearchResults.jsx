// src/pages/SearchResults.js
import React, { useEffect } from 'react';
import { useSearch } from '../context/SearchContext';
import { searchAllContent } from '../utils/searchUtils';
import { useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const { searchQuery, searchResults, setSearchResults, isSearching, setIsSearching } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      const results = searchAllContent(searchQuery);
      setSearchResults(results);
      setIsSearching(false);
    } else {
      navigate('/');
    }
  }, [searchQuery, navigate, setSearchResults, setIsSearching]);

  return (
    <div className="container mx-auto py-8 px-4 mt-20">
      <h1 className="text-2xl font-bold mb-6 text-white">Search Results for "{searchQuery}"</h1>
      
      {isSearching ? (
        <div className="text-white">Searching...</div>
      ) : searchResults.length > 0 ? (
        <div className="space-y-4">
          {searchResults.map((result, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-white">
                <a href={result.link} className="hover:text-blue-300 hover:underline">
                  {result.title}
                </a>
              </h2>
              <p className="text-gray-300 mt-1">{result.description}</p>
              <p className="text-sm text-gray-400 mt-2">{result.type} • {result.section}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-white">No results found. Try a different search term.</div>
      )}
    </div>
  );
};

export default SearchResults;