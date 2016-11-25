class UserVerificationController {
  constructor ($stateParams) {
    'ngInject'
    this.alerts = []

    if ($stateParams.status === 'success') {
      this.alerts.push({ type: 'success', 'title': 'Succès!', msg: 'Succès de vérification e-mail.' })
    } else {
      this.alerts.push({ type: 'danger', 'title': 'Erreur:', msg: 'Echèc de vérification e-mail.' })
    }
  }

  $onInit () {}
}

export const UserVerificationComponent = {
  templateUrl: './views/app/components/user-verification/user-verification.component.html',
  controller: UserVerificationController,
  controllerAs: 'vm',
  bindings: {}
}
