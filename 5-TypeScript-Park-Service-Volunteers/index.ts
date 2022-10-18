import {
    RaccoonMeadowsVolunteers,
    RaccoonMeadowsActivity,
    raccoonMeadowsVolunteers,
  } from "./raccoon-meadows-log";
  
  import {
    WolfPointVolunteers,
    WolfPointActivity,
    wolfPointVolunteers,
  } from "./wolf-point-log";
  
  type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;
  
  type Volunteers = {
    id: number;
    name: string;
    activities: CombinedActivity[];
  };
  
  function combineVolunteers(
    volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
  ) {
    return volunteers.map((volunteer) => {
      let id: string | number = volunteer.id;
      if (typeof id === "string") {
        id = parseInt(id, 10);
      }
      return { id: id, name: volunteer.name, activities: volunteer.activities };
    });
  }
  
  function isVerified(verified: string | boolean) {
    if (typeof verified === "string") {
      return verified === "Yes";
    }
    return verified;
  }
  
  function getHours(activity: CombinedActivity) {
    if ("hours" in activity) {
      return activity.hours;
    } else {
      return activity.time;
    }
  }
  
  function calculateHours(volunteers: Volunteers[]) {
    return volunteers.map((volunteer) => {
      let hours = 0;
  
      volunteer.activities.forEach((activity) => {
        if (isVerified(activity.verified)) {
          hours = hours + getHours(activity);
        }
      });
  
      return {
        id: volunteer.id,
        name: volunteer.name,
        hours: hours,
      };
    });
  }
  
  // as a separate function to sort
  // function byHours(a,b) {
  //   return b.hours - a.hours;
  // }
  
  const combinedVolunteers = combineVolunteers(
    [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
  );
  
  console.log(combinedVolunteers);
  let result = calculateHours(combinedVolunteers);
  console.log(result);
  // sort as a callback
  console.log(result.sort((a,b) => {
    return b.hours - a.hours;
  }))
  