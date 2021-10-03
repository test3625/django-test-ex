from django import forms


class SampleForm(forms.Form):
    title = forms.CharField(label="タイトル", max_length=100, required=True)

    custom = forms.CharField(
        label="カスタム", max_length=100, required=False, widget=
    )

