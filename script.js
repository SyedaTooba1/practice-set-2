let videos = [
    {
        title: "Photoshop tutorial",
        lengthInMinutes: 1,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3,
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 5,
        category: "Entertaining",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9,
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5,
    },
    {
        title: "25 Easy Hair Hacks",
        lengthInMinutes: 10,
        category: "informative",
        uploadDate: new Date("10-22-2018"),
        tags: "easy, speedup, beauty, creativity",
        features: ["Live", "Creative Commons", "HDR"],
        viewCount: 675900,
        rating: 4.4,
    },
    {
        title: "Suspicious Wife",
        lengthInMinutes: 7,
        category: "Comedy",
        uploadDate: new Date("7-19-2019"),
        tags: "comedy, funny",
        features: ["Live", "360°", "3D"],
        viewCount: 37500,
        rating: 4.5,
    },
    {
        title: "Biryani Receipe",
        lengthInMinutes: 18,
        category: "Informative",
        uploadDate: new Date("4-29-2018"),
        tags: "Eid Special, receipe",
        features: ["Location", "VR180", "HDR"],
        viewCount: 567889,
        rating: 2.4,
    },
    {
        title: "Rowdy Rathore",
        lengthInMinutes: 150,
        category: "Entertaining",
        uploadDate: new Date("7-29-2016"),
        tags: "film , action ",
        features: ["Location", "VR180", "Purchased"],
        viewCount: 679900,
        rating: 4.4,
    },
    {
        title: "Hassad episode 14",
        lengthInMinutes: 39,
        category: "Entertaining",
        uploadDate: new Date("7-23-2019"),
        tags: "comedy, funny",
        features: ["Location", "VR180", "Purchased"],
        viewCount: 2487530,
        rating: 3.3,
    },
];

//                           Question 01
// for (let i = 0; i < videos.length; i++){
//     console.log("Title:" + videos[i].title  );
//     console.log("Length:" + videos[i].lengthInMinutes +" minutes:");
//     console.log("Category:" + videos[i].category);
//     console.log("Views:" + videos[i].viewCount);
//     console.log("Uploaded On:" + videos[i].uploadDate);
//     console.log("Rating:" + videos[i].rating);
//     console.log("")
// }


//                           Question 02
// agar lenght choty hai 3 mins se tou print karo warna na karo

// for(let i = 0; i < videos.length; i++){
//     if(videos[i].lengthInMinutes <= 3 ){
//         console.log("Title:" + videos[i].title  );
//     }
// }


//                           Question 03
// for (let i = 0; i < videos.length; i++) {
//     if (videos[i].lengthInMinutes >= 20) {
//         console.log("Title:" + videos[i].title);
//     }
// }


//                           Question 04
// for (let i = 0; i < videos.length; i++) {
//     if (videos[i].lengthInMinutes >= 3 && videos[i].lengthInMinutes <= 20) {
//         console.log("Title:" + videos[i].title);
//         console.log("Length:" + videos[i].lengthInMinutes + " minutes:");
//     console.log("");


//     }
// }


//                           Question 05
// agar duration bari hAI SABSE TOU PRINT KARO 
// for (let i = 0; i < videos.length; i++) {
//     if (videos[i + 1].lengthInMinutes > videos[i].lengthInMinutes) {
//         console.log("Title:" + videos[i].title);
//         console.log("Length:" + videos[i].lengthInMinutes + " minutes:");
//         console.log("");
//     }
// }    (NOT DONE)


//                           Question 06

// for(let i = 0; i < videos.length; i++){
//     if(videos[i].category.substr(0) == "Education"){
//         console.log("Title:" + videos[i].title);
//         console.log("Category:" + videos[i].category);
//         console.log("");

// }
// }

//                           Question 07
for (let i = 0; i < videos.length; i++) {
    if (videos[i].tags.substr(0,20) == "javascript") {
        console.log("Title:" + videos[i].title);
        console.log("Category:" + videos[i].category);
        console.log("");
    }
}
