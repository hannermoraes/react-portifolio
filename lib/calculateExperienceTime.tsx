import { intervalToDuration } from 'date-fns';

interface ExperienceDuration {
  years: number
  months: number
}

function calculateExperienceTime(startDate: Date, endDate: Date): ExperienceDuration {
  const duration = intervalToDuration({ start: startDate, end: endDate });

  return {
    years: duration.years || 0,
    months: duration.months || 0,
  };
}