
import { useState } from "react";

const universities = [
  {
    id: 1,
    name: "University of Melbourne",
    country: "Australia",
    programme: "Computer Science",
  },
  {
    id: 2,
    name: "University of Toronto",
    country: "Canada",
    programme: "Information Technology",
  },
  {
    id: 3,
    name: "University of Manchester",
    country: "United Kingdom",
    programme: "Software Engineering",
  },
];

function SavedUniversities() {
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSavedIds((previous) =>
      previous.includes(id)
        ? previous.filter((savedId) => savedId !== id)
        : [...previous, id]
    );
  };

  return (
    <div className="saved-universities">
      <h2>Explore Universities</h2>
      <p>Save universities that interest you for future reference.</p>

      <div className="university-grid">
        {universities.map((university) => {
          const isSaved = savedIds.includes(university.id);

          return (
            <div className="university-card" key={university.id}>
              <h3>{university.name}</h3>

              <p>
                <strong>Country:</strong> {university.country}
              </p>

              <p>
                <strong>Programme:</strong> {university.programme}
              </p>

              <button
                className={isSaved ? "saved-button" : "save-button"}
                onClick={() => toggleSave(university.id)}
              >
                {isSaved ? "♥ Saved" : "♡ Save University"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="saved-summary">
        <h3>My Saved Universities</h3>
        <p>You have saved {savedIds.length} universities.</p>

        {universities
          .filter((university) => savedIds.includes(university.id))
          .map((university) => (
            <p key={university.id}>♥ {university.name}</p>
          ))}

        {savedIds.length === 0 && (
          <p>You haven't saved any universities yet.</p>
        )}
      </div>
    </div>
  );
}

export default SavedUniversities;
