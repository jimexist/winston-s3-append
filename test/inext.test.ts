import { describe, expect, it } from "vitest"
import { hello } from "../src"

describe("hello", () => {
  it("should be defined", () => {
    expect(hello).toBeDefined()
  })
})
