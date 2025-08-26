import network from "../../public/Features/network.svg"
import meeting from "../../public/Features/meeting.svg"
import profileMan from "../../public/Features/profileManagement.jpg"
import subcription from "../../public/Features/download.png"
import adminSupport from "../../public/Features/AdminSupport.jpg"
import banner from "../../public/Features/PromotionalBanners.png"

interface featureInt{
    icon:string,
    title:string,
    desc:string
}

export const FeaturesData:featureInt[]=[
    {
        icon:network,
        title:"Seamless Networking & Messaging",
        desc:"One-click business connections with companies and delegates, along with real-time chat."
    },
    {
        icon:meeting,
        title:"Smart Meeting Scheduling",
        desc:"Easily schedule and manage meetings with automated reminders and availability tracking."
    },
    {
        icon:profileMan,
        title:"Company & Delegate Profiles Managements",
        desc:"Maintain professional company and delegate profiles with the ability to showcase products and services through images."
    },
     {
        icon:subcription,
        title:"Single Subscription & Full App Access",
        desc:"One subscription unlocks complete access to all features and services."
    },
     {
        icon:banner,
        title:"Promotional Banners for Enhanced Visibility",
        desc:"Boost your brand visibility with in-app paid promotional banners to reach a wider audience."
    },
     {
        icon:adminSupport,
        title:"In-App Admin Support & Assistance",
        desc:"Get quick help with dedicated in-app support and assistance from our admin team."
    }
]