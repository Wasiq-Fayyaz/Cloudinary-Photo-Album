import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Folder } from "./page"
import Link from "next/link"


export function AlbumCard({folder} : {folder: Folder}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All of your {folder.name} images .</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button asChild className="flex bg-white text-black rounded-xl">
            <Link href={`/albums/${folder.name}`}>View Album</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
