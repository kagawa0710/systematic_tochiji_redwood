import { prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import * as csv from 'csv'

export default async () => {
  try {
    const fs = require('fs') // モジュールの読み込み

    const meetingData = fs.createReadStream('./scripts/data/meeting.csv').pipe(
      csv.parse((err, data) => {
        if (err) {
          return []
        } else {
          return data
        }
      })
    )
    console.log(meetingData)

    for (const row of meetingData) {
      db.meeting.create({
        data: {
          prefecture: row[0],
          volume: row[1],
          number: row[2],
          year: row[3],
          month: row[4],
          day: row[5],
          datetime: row[6],
          title: row[7],
        },
      })
    }

    // fs.createReadStream('./scripts/data/.csv').pipe(
    //   csv.parse((err, data) => console.log(data))
    // )

    // const jsonMeeting = fs.readFileSync('./scripts/data/meeting.json')
    // const dataMeeting = JSON.parse(jsonMeeting)

    // for (const row of dataMeeting) {
    //   await db.meeting.create({
    //     data: {
    //       prefecture: row.Prefecture,
    //       volume: row.Volume,
    //       number: row.Number,
    //       year: row.Year,
    //       month: row.Month,
    //       day: row.Day,
    //       datetime: '20' + row.Year + '-' + row.Month + '-' + row.Day,
    //       title: row.Title,
    //     },
    //   })
    // }

    // for (const row of dataSpeaker) {
    //   await db.comment.create({
    //     data: {
    //       name: row.Speaker,
    //       url: 'example.com',
    //       description: '説明文(sample) aa党のボスです。',
    //     },
    //   })
    // }

    // const jsonComment = fs.readFileSync('./scripts/data/Comment.json')
    // const dataComment = JSON.parse(jsonComment)

    // for (const row of dataComment) {
    //   await db.comment.create({
    //     data: {
    //       originId: row.ID,
    //       line: row.Line,
    //       utterance: row.Utterance,
    //       meeting: {
    //         connect: {
    //           title: row.Title,
    //         },
    //       },
    //       speaker: {
    //         connect: {
    //           name: row.Speaker,
    //         },
    //       },
    //     },
    //   })
    // }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
