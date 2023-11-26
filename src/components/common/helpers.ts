import {  addDays } from "date-fns";

export const generateRandomDate=(minDaysAgo: number, maxDaysAgo: number) =>{
  const currentDate = new Date();
  const randomDays = Math.floor(Math.random() * (maxDaysAgo - minDaysAgo + 1)) + minDaysAgo;
  return addDays(currentDate, -randomDays);
}

