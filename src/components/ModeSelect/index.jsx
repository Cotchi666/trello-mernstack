import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = event => {
    setMode(event.target.value)
  }

  return (
    <FormControl size="small">
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
