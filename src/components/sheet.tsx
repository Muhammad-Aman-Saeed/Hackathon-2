"use client"
import { IoIosMenu } from "react-icons/io";
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { NavigationMenuDemo } from "./Navigation_Menu";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant={"outline"}>
              <IoIosMenu/>
            </Button>
          </SheetTrigger>
            <SheetContent side={side}>

              <SheetHeader>
                <SheetTitle>SHOP.CO</SheetTitle>
              </SheetHeader>
                  {/* navbar */}
              <ul className="">
                  <li className="grid grid-cols-1 gap-y-5">
                      <Link href={""}><NavigationMenuDemo/></Link>
                      <Link className="ml-3" href={""}>On Sale</Link>
                      <Link className="ml-3" href={""}>New Arrivals</Link>
                      <Link className="ml-3" href={""}>Brands</Link>
                  </li>
              </ul>
            </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
