import { prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

const url = './scripts/data/togikai.json'

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

    const json = fs.readFileSync(url)
    const data = JSON.parse(json)
    console.log(data)

    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    // Promise.all(
    //   //
    //   // Change to match your data model and seeding needs
    //   //
    //   data.map(async (data) => {
    //     const record = await db.userExample.create({ data })
    //     console.log(record)
    //   })
    // )
    for (const row of data) {
      // await db.comment.create({
      await prisma.comment.create({
        data: {
          originId: row.ID,
          line: row.Line,
          utterance: row.Utterance,
          meeting: {
            create: [
              {
                prefecture: row.Prefecture,
                volume: row.Volume,
                number: row.Number,
                year: row.Year,
                month: row.Month,
                day: row.Day,
                datetime: '20' + row.Year + '-' + row.Month + '-' + row.Day,
                title: row.Title,
              },
            ],
          },
          speaker: {
            create: [
              {
                name: row.Name,
                url: 'example.com',
                description: '説明文(sample) aa党のボスです。',
              },
            ],
          },
        },
      })
    }

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (const user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    // await db.user.create({
    //   data: {
    //     name: user.name,
    //     email: user.email,
    //     hashedPassword,
    //     salt
    //   }
    // })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
