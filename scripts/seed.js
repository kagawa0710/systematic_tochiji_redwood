import { prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
// import * as csv from 'csv'
import { parse } from 'csv-parse/sync'

const fs = require('fs') // モジュールの読み込み

async function meating() {
  const meatingData = parse(
    fs.readFileSync('./scripts/data/meating.csv', 'utf8'),
    {
      columns: true,
      skip_empty_lines: true,
    }
  )

  for (const row of meatingData) {
    // console.log(`row ${JSON.stringify(row)}`)
    await db.meating.create({
      data: {
        prefecture: row.Prefecture,
        volume: row.Volume,
        number: row.Number,
        year: parseInt(row.Year),
        month: parseInt(row.Month),
        day: parseInt(row.Day),
        datetime: row.Date,
        title: row.Title,
        line: parseInt(row.Line),
      },
    })
  }
  console.log(`Created ${meatingData.length} meatingData`)
}

async function speaker() {
  const speakerData = parse(
    fs.readFileSync('./scripts/data/speaker.csv', 'utf8'),
    {
      columns: true,
      skip_empty_lines: true,
    }
  )
  for (const row of speakerData) {
    // console.log(`row ${JSON.stringify(row)}`)
    await db.speaker.create({
      data: {
        name: row.Speaker,
        url: 'example.com',
        description: '説明文(sample) aa党のボスです。',
      },
    })
  }
  console.log(`Created ${speakerData.length} speakerData`)
}

async function comment() {
  const commentData = parse(
    fs.readFileSync('./scripts/data/comment.csv', 'utf8'),
    {
      columns: true,
      skip_empty_lines: true,
    }
  )

  for (const row of commentData) {
    let connectMeating = await db.meating.findMany({
      where: {
        title: row.Title,
      },
    })
    let connectSpeaker = await db.speaker.findMany({
      where: {
        name: row.Speaker,
      },
    })

    await db.comment.create({
      data: {
        originId: row.ID,
        utterance: row.Utterance,
        meating: {
          connect: {
            id: connectMeating[0].id,
          },
        },
        speaker: {
          connect: {
            id: connectSpeaker[0].id,
          },
        },
      },
    })
  }
  console.log(`Created ${commentData.length} commentData`)
}

export default async () => {
  try {
    await meating()
    await speaker()
    await comment()
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
