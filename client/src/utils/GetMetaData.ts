import { IMeta } from "@/models/IMeta"

export const getMetaData = (page: string) => {
  const metaData: { [key: string]: IMeta } = {
    home: {
      title: 'Home | P&S Corporation',
      keywords: 'Sport,sport training,how to train your body,sport meal,sport nutrition',
      description: 'We are one of the largest sports companies. You can train yourself from home using our training program.'
    },
    about: {
      title: 'About | P&S Corporation',
      keywords: 'Sport,sport training,how to train your body,sport meal,sport nutrition',
      description: 'We are one of the largest sports companies. You can train yourself from home using our training program.'
    },
    nutrition: {
      title: 'Nutrition | P&S Corporation',
      keywords: 'Sport,sport meal,sport nutrition,healty diet',
      description: 'Different types of nutrition for everyone! Weight gain, weight loss and simply maintaining a good level of nutrition for women and men.'
    },
    trainings: {
      title: 'Trainings | P&S Corporation',
      keywords: 'Sport,sport training,how to train your body,sport video,video',
      description: 'Here you can find the best training videos! Both from our company and from other professional users.'
    },
    training: {
      title: 'Training | P&S Corporation',
    },
    search: {
      title: 'Search | P&S Corporation',
    },
    myTrainings: {
      title: 'My-Trainings | P&S Corporation',
    },
    profile: {
      title: 'Profile | P&S Corporation',
    },
  }
  return metaData[page]
}