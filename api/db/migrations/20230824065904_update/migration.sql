/*
  Warnings:

  - You are about to drop the column `line` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `line` to the `Meeting` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "originId" TEXT NOT NULL,
    "utterance" TEXT NOT NULL,
    "meetingId" INTEGER NOT NULL,
    "speakerId" INTEGER NOT NULL,
    CONSTRAINT "Comment_meetingId_fkey" FOREIGN KEY ("meetingId") REFERENCES "Meeting" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comment_speakerId_fkey" FOREIGN KEY ("speakerId") REFERENCES "Speaker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("id", "meetingId", "originId", "speakerId", "utterance") SELECT "id", "meetingId", "originId", "speakerId", "utterance" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE TABLE "new_Meeting" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prefecture" TEXT NOT NULL,
    "volume" TEXT NOT NULL,
    "line" INTEGER NOT NULL,
    "number" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "datetime" TEXT NOT NULL,
    "title" TEXT NOT NULL
);
INSERT INTO "new_Meeting" ("datetime", "day", "id", "month", "number", "prefecture", "title", "volume", "year") SELECT "datetime", "day", "id", "month", "number", "prefecture", "title", "volume", "year" FROM "Meeting";
DROP TABLE "Meeting";
ALTER TABLE "new_Meeting" RENAME TO "Meeting";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
