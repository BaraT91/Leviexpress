import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = (event) => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
    console.log('Nalezeno spojení s ID:', journeyData.journeyId);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <p>Nalezeno spojení s id: {journey.journeyId}</p>}
    </main>
  );
};
