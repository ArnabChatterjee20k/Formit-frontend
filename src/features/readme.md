### Flow

- Form is the wrapper where all the fields will be rendered

- Field Component inside the Form is conditionally rendering the fields based on type. 
    - Field is receiving props from Form and it is then distributing the props using context which is getting used by other Fields

- FieldCard is the field component wrapper where all the field will be rendered with desired settings

- Fields contain all input fields. Fields will be the containing raw level components inside the FieldCard

#### Example

```text
    Form
        Field(type=text) => TextField  (FieldCard -> Text Raw Component)
        Field(type=check) => CheckField  (FieldCard -> Check Raw Component)
```
