command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Windows 10 + Yarn + Husky5 workaround
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi