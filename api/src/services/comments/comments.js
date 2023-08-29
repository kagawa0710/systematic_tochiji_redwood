import { db } from 'src/lib/db'

export const comments = () => {
  return db.comment.findMany()
}

export const comment = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const createComment = ({ input }) => {
  return db.comment.create({
    data: input,
  })
}
export const searchComment = ({ searchWord }) => {
  return db.comment.findMany({
    where: {
      utterance: { contains: searchWord },
    },
  })
}

export const filterComment = ({ searchWord, speakerName }) => {
  return db.comment.findMany({
    where: {
      utterance: { contains: searchWord },
      speaker: {
        name: { contains: speakerName },
      },
    },
  })
}

export const updateComment = ({ id, input }) => {
  return db.comment.update({
    data: input,
    where: { id },
  })
}

export const deleteComment = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}

export const Comment = {
  meeting: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).meeting()
  },
  speaker: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).speaker()
  },
}
