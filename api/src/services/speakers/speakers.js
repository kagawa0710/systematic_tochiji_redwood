import { db } from 'src/lib/db'

export const speakers = () => {
  return db.speaker.findMany()
}

export const speaker = ({ id }) => {
  return db.speaker.findUnique({
    where: { id },
  })
}

export const searchSpeakersName = ({ searchName }) => {
  return db.speaker.findMany({
    where: { name: { contains: searchName } },
  })
}

export const filterSentence = ({ speakerName, searchWord }) => {
  return db.speaker.findMany({
    where: {
      name: { contains: speakerName },
      comment: {
        None: {
          utterance: { contains: searchWord },
        },
      },
    },
    include: {
      comment: true,
    },
  })
}

export const createSpeaker = ({ input }) => {
  return db.speaker.create({
    data: input,
  })
}

export const updateSpeaker = ({ id, input }) => {
  return db.speaker.update({
    data: input,
    where: { id },
  })
}

export const deleteSpeaker = ({ id }) => {
  return db.speaker.delete({
    where: { id },
  })
}

export const Speaker = {
  comment: (_obj, { root }) => {
    return db.speaker.findUnique({ where: { id: root?.id } }).comment()
  },
}
