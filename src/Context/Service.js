import React from "react";
import { Observable, Subject } from "rxjs";

let loginStatus = new Subject();

export function Service(data) {
  console.log("hello setStatus");
  loginStatus.next(data);
}
