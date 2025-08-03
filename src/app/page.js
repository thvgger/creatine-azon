"use client";

import Search from "@/components/Search";
import { useEffect, useState } from "react";

export default function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search.trim() === '') return;

    const fetchAnime = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/anime?q=${search}`);
        const data = await res.json();
        setResults(data.data); // data.data is the list of anime
      } catch (error) {
        console.error("Error fetching anime:", error);
      }
    };

    fetchAnime();
  }, [search]); // triggers every time search changes

  return (
    <main className="min-h-screen bg-gradient text-white">
      <div>
        <header>
          <div className="flex justify-center text-4xl">
            <h1 className="w-max mt-5 font-bold">
              <span className="text-gradient">ANIME</span> INDEX
            </h1>
          </div>
        </header>

        <Search search={search} setSearch={setSearch} />

        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((anime) => (
            <div key={anime.mal_id} className="bg-[#273d71] p-2 rounded-lg shadow">
              <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-64 object-cover rounded" />
              <h3 className="text-lg mt-2 font-bold">{anime.title}</h3>
              <p className="text-sm">{anime.synopsis?.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
