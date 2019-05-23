import os

res_file_image = ''
#System Unix 
UnidadDIR = os.path.join(os.path.expanduser("~"), "pccomunnity")

def resFileImage(value):
	if(not os.path.isdir(UnidadDIR)):
		return UnidadDIR

	for root, dir, file in os.walk(UnidadDIR):
		for name in file:
			if(value in name):
				res_file_image = os.path.join(root,name)
				break
	return res_file_image


def renameFile(username, file, command):
	if command == 'community':
		back_file = str("play_code_community_"+username+"_"+file)
	elif command == 'project':
		back_file = str("play_code_project_"+username+"_"+file)
	return back_file

def renameFileProject(username, file, command):
	if command == 'project':
		back_file = str(username+"_"+file)
	return back_file
