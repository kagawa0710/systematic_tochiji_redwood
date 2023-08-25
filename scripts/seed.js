import { prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
// import * as csv from 'csv'
import { parse } from 'csv-parse/sync'

const fs = require('fs') // モジュールの読み込み

function meeting() {
  const meetingData = parse(
    fs.readFileSync('./scripts/data/meeting.csv', 'utf8'),
    {
      columns: true,
      skip_empty_lines: true,
    }
  )

  for (const row of meetingData) {
    // console.log(`row ${JSON.stringify(row)}`)
    console.log(row.Prefecture)
    db.meeting.create({
      data: {
        prefecture: row.Prefecture,
        volume: row.Volume,
        number: row.Number,
        year: row.Year,
        month: row.Month,
        day: row.Day,
        datetime: row.Date,
        title: row.Title,
      },
    })
  }
  console.log(`Created ${meetingData.length} meetingData`)
}

function speaker() {
  const speakerData = parse(
    fs.readFileSync('./scripts/data/speaker.csv', 'utf8'),
    {
      columns: true,
      skip_empty_lines: true,
    }
  )
  for (const row of speakerData) {
    db.comment.create({
      data: {
        name: row.Speaker,
        url: 'example.com',
        description: '説明文(sample) aa党のボスです。',
      },
    })
  }
  console.log(`Created ${speakerData.length} speakerData`)
}

function comment() {
  const commentData = parse(
    fs.readFileSync('./scripts/data/comment.csv', 'utf8'),
    {
      columns: true,
      skip_empty_lines: true,
    }
  )
  for (const row of commentData) {
    db.comment.create({
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
  console.log(`Created ${commentData.length} commentData`)
}

export default async () => {
  try {
    await meeting()
    await speaker()
    await comment()
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
