import React from "react";
import {ArrayField, ArrayInput, ChipField, Create, Datagrid, DateField, DateInput, Edit, List, ReferenceInput, SelectInput, SimpleForm, SimpleFormIterator, SingleFieldList, TextField, TextInput } from "react-admin";


export const SchoolList = (props: any) => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="full_name" />
			{/* <TextField source="id" /> */}
			<DateField source="creation_date" />
			<TextField source="acronym" />
			<TextField source="alternate_freeperiod_name" />
			<DateField source="last_modified" />
			{/* <ReferenceField source="owner_id" reference="owners"><TextField source="id" /></ReferenceField> */}
		</Datagrid>
	</List>
);

export const BellScheduleList = (props: any) => (
	<List {...props}>
		<Datagrid rowClick="edit">
			{/* <TextField source="school" /> */}
			<TextField source="name" />
			<TextField source="display_name" />
			<ArrayField source="meeting_times" label="Class Periods"><SingleFieldList><ChipField source="name" /></SingleFieldList></ArrayField>
			
		
			{/* <ArrayField source="dates"></ArrayField> */}
			{/* <TextField source="dates" /> */}
			{/* <TextField source="id" /> */}
			<DateField source="creation_date" />
			{/* <DateField source="last_modified" /> */}

		</Datagrid>
	</List>
);

export const BellscheduleEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="name" />
			{/* <TextField source="id" /> */}
			<TextInput source="display_name" />
			{/* <DateField source="last_modified" /> */}
			{/* <TextInput source="dates" /> */}
			<ArrayInput source="meeting_times">
				<SimpleFormIterator disableReordering>
					{/* <ReferenceInput source="bell_schedule_id" reference="bellschedule">
						<SelectInput optionText="id" />
					</ReferenceInput> */}
					<TextInput source="name" label="Name" />
					<TextInput source="start_time"  label="Start Time" />
					<TextInput source="end_time"  label="End Time" />
				</SimpleFormIterator>
			</ArrayInput>
			{/* <TextInput source="school" /> */}
			<DateField source="creation_date" label="Date Created" />
		</SimpleForm>
	</Edit>
);


export const BellScheduleCreate = (props: any) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
			{/* <TextField source="id" /> */}
			<TextInput source="display_name" />
			<ReferenceInput label="School" source="id" reference="school">
				<SelectInput optionText="full_name" />
				{/*  create={<CreateCategory />} */}
			</ReferenceInput>
			{/* <DateField source="last_modified" /> */}
			{/* <TextInput source="dates" /> */}
			<ArrayInput source="meeting_times">
				<SimpleFormIterator>
					{/* <ReferenceInput source="bell_schedule_id" reference="bellschedule">
						<SelectInput optionText="id" />
					</ReferenceInput> */}
					<TextInput source="name" label="Name" />
					<TextInput source="start_time" label="Start Time" />
					<TextInput source="end_time" label="End Time" />
				</SimpleFormIterator>
			</ArrayInput>
			
			{/* <TextInput source="school" /> */}
			{/* <DateField source="creation_date" label="Date Created" /> */}
		</SimpleForm>
	</Create>
)