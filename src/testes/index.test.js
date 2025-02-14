
function soma(a, b) {
    return a + b
}

test("Testando se está somando correto", () => {
    expect(typeof soma(1, 2)).toBe("number")

})
