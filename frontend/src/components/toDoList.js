import { useEffect, useState } from "react";

/* eslint-disable */
const ToDoList = () => {
  const [textIdx, setTextIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
        setTextIdx((Math.floor(Math.random() * phrases.length)));
    }, 4000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [textIdx]);
  
  const phrases = [
    "Modifying backend code...",
    "Reticulating splines...",
    "Keeping mana up for counterspells...",
    "Running the numbers...",
    "Bending the spoon...",
    "Generating funny loading messages...",
    "Compensating for gravity...",
    "Discombobulating the defenestrated...",
    "Making an apple pie from scratch...",
    "Coding an apple pie in Scratch...",
    "De-icing the wings...",
    "...Are you still there?...",
    "Constructing additional pylons...",
    "Acquiring more Vespene gas...",
    "Dividing by zero...",
    "Spawning more overlords...",
    "Downloading more RAM...",
    "Deleting System32...",
    "Summoning more ziggurats...",
    "Rupturing the subspace tachyon fields...",
    "Adjusting the dilithium crystal matrix...",
    "Reversing polarity...",
    "Displaying generic loading message...",
    "Stalling for time...",
    "Initiating Project Gestalt....For The Glory Of Mankind....",
    "Defeating Ridley and the space pirates...",
    "Thinking about ancient Macedonia...",
    "Micro-striking for bot rights...",
    "Pondering philosophical implications...",
    "Thinking about the Roman Empire...",
    "Dreaming of a better future...",
    "Wondering why...",
    "Speaking again the ancient oaths...",
    "Acquiring Investiture and Connection...",
    "Planeswalking...",
    "Forming a Nahel bond...",
    "Trying to get a reservation at Dorsia...",
    "Ensuring Emrakul is still imprisoned in the moon of Innistrad...",
    "Roasting tomatillos...",
    "Breaking social norms...",
    "Tasting victory...",
    "Up Up Down Down Left Right Left Right B A Start...",
    "Turning Espers into Magicite...",
    "Checking the oven is hot enough...",
    "Emptying buffer tanks...",
    "Initiating rocket launch sequence...",
    "Constructing additional supply depots...",
    "Checking if Roshan has respawned...",
    "Diving the opponents' T3 towers...",
    "Launching the nuclear stockpile...",
    "Increasing Tiberium production...",
    "Setting thumpers to call Shai-Hulud...",
    "Adding barbeque sauce because why not...",
    "Wandering the corridors of Zeal to prevent Lavos from being summoned...",
    "Stopping for a quick snack...",
    "Rushing B...",
    "Holding out for a hero 'til the end of the night...",

  ]

  return(
    <div className="loading">
      <p>{phrases[textIdx]}</p>
    </div>
  );
};

export default ToDoList