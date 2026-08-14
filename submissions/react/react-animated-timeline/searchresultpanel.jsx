import { useState } from "react";

export default function SearchResultsPanel() {
  const data = [
    { category: "Languages", name: "Java" },
    { category: "Languages", name: "JavaScript" },
    { category: "Frameworks", name: "React" },
    { category: "Frameworks", name: "Vue" },
  ];

  const [search, setSearch] = useState("");

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ width: "320px", margin: "30px auto" }}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {search && (
        <div
          className="ease-fade-in"
          style={{
            marginTop: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          {filtered.length > 0 ? (
            <>
              <h4>Results</h4>

              {filtered.map((item, index) => (
                <div
                  key={index}
                  className="ease-hover-lift"
                  style={{
                    padding: "8px",
                    marginTop: "6px",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <b>{item.category}</b> : {item.name}
                </div>
              ))}
            </>
          ) : (
            <p className="ease-fade-in">No Results Found</p>
          )}
        </div>
      )}
    </div>
  );
}