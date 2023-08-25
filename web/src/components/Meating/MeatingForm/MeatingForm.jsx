import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const MeatingForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.meating?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="prefecture"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prefecture
        </Label>

        <TextField
          name="prefecture"
          defaultValue={props.meating?.prefecture}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="prefecture" className="rw-field-error" />

        <Label
          name="volume"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Volume
        </Label>

        <TextField
          name="volume"
          defaultValue={props.meating?.volume}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="volume" className="rw-field-error" />

        <Label
          name="line"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Line
        </Label>

        <NumberField
          name="line"
          defaultValue={props.meating?.line}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="line" className="rw-field-error" />

        <Label
          name="number"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number
        </Label>

        <TextField
          name="number"
          defaultValue={props.meating?.number}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="number" className="rw-field-error" />

        <Label
          name="year"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Year
        </Label>

        <NumberField
          name="year"
          defaultValue={props.meating?.year}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="year" className="rw-field-error" />

        <Label
          name="month"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Month
        </Label>

        <NumberField
          name="month"
          defaultValue={props.meating?.month}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="month" className="rw-field-error" />

        <Label
          name="day"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Day
        </Label>

        <NumberField
          name="day"
          defaultValue={props.meating?.day}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="day" className="rw-field-error" />

        <Label
          name="datetime"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Datetime
        </Label>

        <TextField
          name="datetime"
          defaultValue={props.meating?.datetime}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="datetime" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.meating?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MeatingForm
