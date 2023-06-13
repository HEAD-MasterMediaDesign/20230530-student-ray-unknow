import {ref, computed} from 'vue'
import type {Ref} from 'vue'
import { defineStore } from 'pinia'
import type {IDataType} from "../data"

export const useAppStore = defineStore('counter', () => {

  const modalLevelKey = ref('')
  const modalActiveQuestionIndex = ref(-1)

  const data: Ref<IDataType> = ref({
    "levels": {
      ram: {
        questionResolvedCounter: 0,
        titre:"RAMs",
        description: "Browsing History",
        activeQuestions: [
          {
            url: "https://www.aljazeera.com/where/lebanon/",
            choicePessimist: "Mama and her obsession with live news.. I can almost hear Baba telling her to stop clicking the refresh button so loud. I wonder what's the last thing they saw on this page before the explosion.",
            choiceOptimist: "",
            index: 0,
            type: "questionActive",
          },
          {
            url: "https://www.google.com/maps/dir/Coll%C3%A8ge+Louise+Wegmann+-+Joura,+Jouret+El+Ballout,+Lebanon/Bilal,+Bayrut,+Lebanon/@33.8899742,35.5288829,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151f3ebdab9f36f5:0x1e2a073a010b1b1c!2m2!1d35.6340115!2d33.899133!1m5!1m1!1s0x151f1710bc331751:0x9ed1abc893b861cf!2m2!1d35.5067369!2d33.8790787!3e0",
            choicePessimist: "This doesn't make any sense, why? Could they have headed to the airport leaving me alone? I might have become too much of a burden in these times of financial crisis...",
            choiceOptimist: "The road from home to Rafik Hariri Airport.. Were they actually thinking of going? Highly improbable. I wonder if the security camera's have any footage to confirm my reasoning.",
            index: 2,
            type: "questionActive",
          },
          {
            url: "https://www.google.com/maps/dir/33.879082,35.506748/Beirut-Rafic+Hariri+International+Airport,+Beirut,+Lebanon/@33.8530363,35.4768458,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x151f19894e84f24b:0xe5592956cfaa421c!2m2!1d35.493178!2d33.8256459!3e0",
            choicePessimist: "I see now.. They were checking the time from school to home to make sure we won't run into each other before takeoff.. I had a feeling that I shouldn't have stayed longer in school to talk to Samir that day..",
            choiceOptimist: "The road from school to home. It usually takes between 19 to 23 minutes. But most importantly they were worried that I might pass by the Port route where the fires were happening.",
            index: 3,
            type: "questionActive",
          },
          {
            url: " https://www.ge.ch/demander-permis-travail-employeur-suisse",
            choicePessimist: "Baba always talked about how he could find many opportunites abroad. It would have probably made the paperwork harder for them with a kid that has no degree even.",
            choiceOptimist: "",
            index: 4,
            type: "questionActive",
          },

        ],
        inactiveQuestions: [
          {
            url: "https://www.facebook.com/profile.php?id=100092686805737 ",
            description: "Baba's profile? Was he trying to delete his profile to not leave a trace behind? I'm feeling tired.. Wish I tried better to not be a dead weight on them. Now I can't even see the images properly. it's all I have left of them.. The GPU could be fucking up for the 20th time, I have to check it out. ",
            pageOfNextLeve: "GPU",
            index: 1,
            isResolved: false,
            type: "questionUnactive",
          },
          {
            url: "https://www.acouplecooks.com/italian-pizza-recipe/ ",
            description: "They were checking the recipe for pizza and probably cooked it. I should check the kitchen's security camera, I might find some footage that could provide more context. The GPU should still be rendering something at least. Hope its Power Connectors are not too damaged",
            pageOfNextLeve: "GPU",
            index: 5,
            isResolved: false,
            type: "questionUnactive",
          }
        ],
        imageQuestions: [],
        videoQuestions: [],
      },
      gpu: {
        questionResolvedCounter: 0,
        titre: "GPU",
        description: "Cameras Display",
        activeQuestions: [
          {
            url: '',
            choicePessimist: "The cameras are frozen.. They probably froze them by tampering with the power Supply... Could they have done all that to avoid me the pain of looking for them in vain?",
            choiceOptimist: "",
            index: 0,
            type: "questionActive",
          },
        ],
        inactiveQuestions: [
          {
            url: '',
            index: 1,
            description: '',
            pageOfNextLeve: "SUPPLY",
            isResolved: false,
            type: "questionUnactive",
          }
        ],
        imageQuestions: [],
        videoQuestions: [],
      },
      supply: {
        questionResolvedCounter: 0,
        titre: "SUPPLY",
        description: "Performance % - voltage utilization V",
        activeQuestions: [
          {
            choicePessimist: "Stupid chip is messing up again.. seems like they messed with it too to make sure I won't lose it trying it find them. I wish I could go back in time and apologize to them for being useless in times of crisis.. ",
            choiceOptimist: "I can see a repeating pattern made out of 3 elements. Something is indeed repeating infinetly. Could that be leading to a frame freeze? The CPU's capacitors could be damaged . Got to investigate",
            index: 0,
            url: '',  //todo ??
            type: "questionActive",
          },
        ],
        inactiveQuestions: [], //todo pas de questions
        imageQuestions: [],
        videoQuestions: [],
      },
      cpu: {
        questionResolvedCounter: 0,
        titre: "CPU",
        description: "Instructions sent/recieved",
        activeQuestions: [
          {
            url: "Instruction sent to Network Interface Card failed",
            choicePessimist: "As always, after national events the government shuts down all telecommunications. It is so obvious, every time. Can't believe some people think its a conspiracy theory.",
            choiceOptimist: "Access to all telecommunications are down again. I'm almost sure this is due to heavy load on the servers after national events. Everyone is calling their loved ones to see if they're alive and well.",
            index: 0,
            type:"questionActive",
          },
          {
            url: "Keyboard unplugged unexpetedly",
            choicePessimist: "Another attempts to spare me the pain of looking for them hopelessly. These can't all be coincidences...",
            choiceOptimist: "This must be after the explosion. The blast would have disconnected the keyboard from the motherboard. 2750 Tonnes of ammonium nitrate could easily do that.",
            index: 1,
            type:"questionActive",
          },
          {
            url: " Fetching instruction: CAM BDROOM DISPLAY, CAM KTCHN DISPLAY Decoding Instruction: Failed.",
            choicePessimist: "That explains the GPU thing. No wonder it's not working if they disabled it.",
            choiceOptimist: "The decoding is failing so the execution is not taking place. Force execution",
            index: 4,
            type:"questionActive",
          }
        ],
        inactiveQuestions: [
          {
            //todo c'est pas un URL ca
            "url": "Executing Instruction: Saving recording 09210",
            description: "I knew they would never abandon me like that. They surely left me a crucial voice recordings to follow them wherever they are. The HDD is the next piece to investiagate",
            index: 2,
            pageOfNextLeve: "HDD",
            isResolved: false,
            type:"questionUnactive",
          },
          {
            url: '', //todo pas d'url??
            //todo je comprends rien ici
            // "url": "Fetching extruction: Format",
            // "Decoding instruction": succeeded,
            // "Executing instruction": Format failed",
            description: "Its so obvious now. they directly tried to format the computer and probably what's on the HDD to hide their new destination. Lucky for me it didn't work. I can check the HDD for more.",
            pageOfNextLeve: "HDD",
            index: 3,
            isResolved: false,
            type: "questionUnactive",
          },
        ],
        imageQuestions: [],
        videoQuestions: [],
      },
      hdd: {
        questionResolvedCounter: 0,
        "titre": "HDD",
        "description": "Images-Videos-Paperworl",
        "activeQuestions": [],
        inactiveQuestions: [],
        imageQuestions: [

          {
            imageCover: '/HDD/2.jpeg',
            imageURL: '/HDD/2.jpeg',
            text: 'Image_',
            index: 1,
            type: "questionImage",
          },

          {
            imageCover: '/HDD/5.JPG',
            imageURL: '/HDD/5.JPG',
            text: 'Image_Passport_Photo_Swiss_Permit',
            index: 4,
            type: "questionImage",
          },

          {
            imageCover: '/HDD/7.jpg',
            imageURL: '/HDD/7.jpg',
            text: 'Image_Hezbollah_Comment_Protest',
            index: 6,
            type: "questionImage",
          },

          {
            imageCover: '/HDD/8.png',
            imageURL: '/HDD/8.png',
            text: 'Image_Death_Certificate',
            index: 7,
            type: "questionImage",
          },
          {
            imageCover: '/HDD/10.jpeg',
            imageURL: '/HDD/10.jpeg',
            text: 'Image_Beach_Barghout',
            index: 9,
            type: "questionImage",
          },


        ],
        videoQuestions: [
          {
            type: 'questionVideo',
            videoURL: "/HDD/1.mp4",
            text: "Video_Revolution_20th_October",
            videoCover: "/HDD/Cover_1.jpg",
            index:0,
          },
          {
            type: 'questionVideo',
            videoURL: "/HDD/3.mp4",
            text: "Video_Protest_Celebration",
            videoCover: "/HDD/Cover_3.jpg",
            index:2,
          },
          {
            type: 'questionVideo',
            videoURL: "/HDD/4.mp4",
            text: "Video_Port_Explosion",
            videoCover: "/HDD/Cover_4.jpg",
            index:3,
          },
          {
            type: 'questionVideo',
            videoURL: "/HDD/6.mp4",
            text: "Video_Concert_Iris_Beach",
            videoCover: "/HDD/Cover_6.jpg",
            index:5,
          },
          {
            type: 'questionVideo',
            videoURL: "/HDD/9.mp4",
            text: "Video_Militia_Intidimation",
            videoCover: "/HDD/Cover_9.jpg",
            index:8,
          },
        ],
      }
    }
  })


  return {
    modalLevelKey,
    modalActiveQuestionIndex,
    data,
  }
})
