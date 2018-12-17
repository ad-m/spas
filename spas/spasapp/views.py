from django.shortcuts import render
from django.http import HttpResponseRedirect

from django import forms

class UploadFileForm(forms.Form):
    file = forms.FileField()


# Create your views here.
def upload(request):
    if request.method == "POST":
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            filehandle = request.FILES['file']
            return excel.make_response(filehandle.get_sheet(), "csv",
                                       file_name="download")
    else:
        form = UploadFileForm()
    return render(
        request,
        'upload_form.html',
        {
            'form': form,
            'title': 'Excel file upload and download example',
            'header': ('Please choose any excel file ' +
                       'from your cloned repository:')
        })

# Create your views here.


def index(request):
    return render(request, 'spasapp/index.html', {})

def about(request):
    return render(request, 'spasapp/about.html', {})

def contact(request):
    return render(request, 'spasapp/contact.html', {})

def data(request):
    return render(request, 'spasapp/data.html', {})
