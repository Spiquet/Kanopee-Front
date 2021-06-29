import { User } from './../../../../../shared/models/user';
import { UserService } from './../../../../../shared/services/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkshopService } from '../../../../../shared/services/workshop.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
    selector: 'app-workshop-forms',
    templateUrl: './workshop-forms.component.html',
    styleUrls: ['./workshop-forms.component.scss'],
})
export class WorkshopFormsComponent implements OnInit {
    @Input() user: User;

    formSubmitted = false;
    selectedFile = { kulteur: {}, user: {} };
    id: number;
    fileName: string;
    libelle = 'Valider';
    isCreation = true;

    // Création du FormGroup
    buildForm = this.fb.group({
        title: ['', Validators.required],
        duration: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
        link1: ['', Validators.required],
        link2: ['', Validators.required],
        link3: [''],
        link4: [''],
        link5: [''],
        link6: [''],
        description: ['', [Validators.required, Validators.minLength(5)]],
        importOne: [''],
        importTwo: [''],
    });

    constructor(
        private workshopService: WorkshopService,
        private userService: UserService,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<WorkshopFormsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

    ngOnInit() {
        this.user = this.userService.user;
        // Recupération des données à l'initialisation
        this.buildForm.patchValue({
            id: this.data.id,
            title: this.data.title,
            duration: this.data.duration,
            link1: this.data.link1,
            link2: this.data.link2,
            link3: this.data.link3,
            link4: this.data.link4,
            link5: this.data.link5,
            link6: this.data.link6,
            description: this.data.description,
            importOne: '',
            importTwo: '',
        });
        console.log(this.data.importTwo);
        if (this.data.id) {
            this.libelle = 'Modifier';
            this.isCreation = false;
        }
    }

    // Getter
    get f() {
        return this.buildForm.controls;
    }

    // Selection des fichiers à upload
    onFileSelect(event: any, mode: string) {
        if (mode === 'user') {
            this.selectedFile.user = event.target.files[0] as File;
        } else {
            this.selectedFile.kulteur = event.target.files[0] as File;
        }
    }

    // Soumission et Modification du Formulaire
    onFormSubmit() {
        this.formSubmitted = true;

        const fd = new FormData();
        if (this.id) {
            fd.append('id', this.id.toString());
        }
        fd.append('title', this.buildForm.get('title').value);
        fd.append('duration', this.buildForm.get('duration').value);
        fd.append('link1', this.buildForm.get('link1').value);
        fd.append('link2', this.buildForm.get('link2').value);
        fd.append('link3', this.buildForm.get('link3').value);
        fd.append('link4', this.buildForm.get('link4').value);
        fd.append('link5', this.buildForm.get('link5').value);
        fd.append('link6', this.buildForm.get('link6').value);
        fd.append('description', this.buildForm.get('description').value);
        fd.append('userSupport', this.selectedFile.user as File);
        fd.append('kulteurSupport', this.selectedFile.kulteur as File);

        let save$;
        if (this.isCreation) {
            save$ = this.workshopService.create(fd);
        } else {
            save$ = this.workshopService.update(Number(fd.get('id')), fd);
        }

        save$.subscribe((result) => {
            this.dialogRef.close(result);
        });

        console.log(this.selectedFile);
    }

    // Reset le Formulaire
    onReset() {
        this.buildForm.reset();
        this.buildForm.markAsUntouched();
    }

    closeForm() {
        this.dialogRef.close();
    }
}
