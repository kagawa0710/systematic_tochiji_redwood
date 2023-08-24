import { prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import * as csv from 'csv'

const parse = require('csv-parse/lib/sync')

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //

    // JSONファイルを取得
    const fs = require('fs') // モジュールの読み込み

    // const dataSpeaker = parse(
    //   fs.readFileSync('./scripts/data/meeting.csv', 'utf8'),
    //   {
    //     columns: true,
    //     skip_empty_lines: true,
    //   }
    // )

    fs.createReadStream('./scripts/data/meeting.csv').pipe(
      csv.parse((err, data) => console.log(data))
    )

    // for (const row of dataSpeaker) {
    //   await db.comment.create({
    //     data: {
    //       name: row.Speaker,
    //       url: 'example.com',
    //       description: '説明文(sample) aa党のボスです。',
    //     },
    //   })
    // }

    const jsonMeeting = fs.readFileSync('./scripts/data/meeting.json')
    const dataMeeting = JSON.parse(jsonMeeting)

    for (const row of dataMeeting) {
      await db.meeting.create({
        data: {
          prefecture: row.Prefecture,
          volume: row.Volume,
          number: row.Number,
          year: row.Year,
          month: row.Month,
          day: row.Day,
          datetime: '20' + row.Year + '-' + row.Month + '-' + row.Day,
          title: row.Title,
        },
      })
    }

    const jsonComment = fs.readFileSync('./scripts/data/Comment.json')
    const dataComment = JSON.parse(jsonComment)

    for (const row of dataComment) {
      await db.comment.create({
        data: {
          originId: row.ID,
          line: row.Line,
          utterance: row.Utterance,
          meeting: {
            connect: {
              title: row.Title,
            },
          },
          speaker: {
            connect: {
              name: row.Speaker,
            },
          },
        },
      })
    }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
