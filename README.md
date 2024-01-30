# Documentation

## Data Tracked

### Modifiable

- health
- max-health
- Blood Magic Uses
- Max Blood Magic Uses
- AC
- initiative-mod
- land-speed
- passive-perception
- proficiency-bonus
- num-hit-dice
- type-hit-dice
- blood rites applied
  - Array indexed by weapon IDs containing Blood Rite IDs (i.e. an array map)

### Unmodifiable

- Weapon ID numbers
- Blood Rite ID numbers
  - No rite is denoted as an ID of -100?
- Blood magic ID numbers
- Ability score IDs (3 letter abbrev.)
- Movement speed IDs (climbing, flying, swimming, ...)
  - Object with Name of movement type
  - with icon image path
- Skill IDs (just the names, lower case and replacing ' ' with '-')
  - Object with key base-ability (STR, DEX, ...)
- Class feature / status effect IDs
  - Linked to a name,
  - a description,
  - a list of the abilities it affects,
  - a list of the weapons it affects?,
  - a map of the saving throws it affects,
    - maps each Ability score ID to a number: -1, 0, or 1, denoting disadvantage, no change, or advantage in that order


## Panel Contents

### Weapons

- One row each weapon
- Weapon row has button to select blood rite applied
  - When pressed, opens available blood rites list to select
  - If blood rite is re-selected, it is removed
  - Blood rite is removed automatically at short rest
  - When selection is finalized, notify to roll correct dice type (to reduce current health by that amount)

### Resources

- AC
- Blood Magic Uses
- Hit Dice
- Initiative mod
- Movement Speed
  - Click to cycle through movement types

### Mutagens

- Mutagens prepared
- Mutagens active
- description button for each mutagen

### Saving Throws


### Ability Modifiers

- Proficiency bonus
- Grid of ability modifiers with their names beside them and the ability score they're based off of
- Tapping on an ability entry will open a page that contains all class features

### Blood Magic

- List of names with short descriptions
- Tap reveals full descriptions
- Cast button consumes a blood magic use
- Cast button is on each blood magic type and within each full description

### General Rules Reference -- Low priority

- Actions possible
  - Dodge, grapple, etc.
- Falling damage
- Holding breath
- Size of different creatures?
- Light and sight rules
